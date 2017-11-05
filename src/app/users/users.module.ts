import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { UsersRoutingModule } from './users-routing.module';

import { reducer } from './reducers/users.reducer';

import { UsersEffects } from './effects/users.effects';

import { UsersPageComponent } from './containers/users-page.component';

@NgModule({
  imports: [
    CommonModule,

    /**
     * StoreModule.forFeature is used for composing state
     * from feature modules. These modules can be loaded
     * eagerly or lazily and will be dynamically added to
     * the existing state.
     */
    StoreModule.forFeature('users', reducer),

    /**
     * Effects.forFeature is used to register effects
     * from feature modules. Effects can be loaded
     * eagerly or lazily and will be started immediately.
     *
     * All Effects will only be instantiated once regardless of
     * whether they are registered once or multiple times.
     */
    EffectsModule.forFeature([UsersEffects]),

    UsersRoutingModule,
  ],
  declarations: [
    UsersPageComponent,
  ],
  providers: [],
})
export class UsersModule {}
