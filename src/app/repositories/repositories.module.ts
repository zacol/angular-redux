import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { RepositoriesRoutingModule } from './repositories-routing.module';

import { reducer } from './reducers/repositories.reducer';

import { RepositoriesEffects } from './effects/repositories.effects';

import { RepositoriesPageComponent } from './containers/repositories-page.component';

@NgModule({
  imports: [
    CommonModule,

    /**
     * StoreModule.forFeature is used for composing state
     * from feature modules. These modules can be loaded
     * eagerly or lazily and will be dynamically added to
     * the existing state.
     */
    StoreModule.forFeature('repositories', reducer),

    /**
     * Effects.forFeature is used to register effects
     * from feature modules. Effects can be loaded
     * eagerly or lazily and will be started immediately.
     *
     * All Effects will only be instantiated once regardless of
     * whether they are registered once or multiple times.
     */
    EffectsModule.forFeature([RepositoriesEffects]),

    RepositoriesRoutingModule,
  ],
  declarations: [
    RepositoriesPageComponent,
  ],
  providers: [],
})
export class RepositoriesModule {}
