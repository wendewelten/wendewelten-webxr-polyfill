/*
 * Copyright 2019 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export const PRIVATE = Symbol('@@webxr-polyfill/XRPose');

export default class XRPose {
  /**
   * @param {XRRigidTransform} transform 
   * @param {boolean} emulatedPosition 
   */
  constructor(transform, emulatedPosition) {
    this[PRIVATE] = {
      transform,
      emulatedPosition,
    };
  }

  /**
   * @return {XRRigidTransform}
   */
  get transform() { return this[PRIVATE].transform; }

  /**
   * @return {bool}
   */
  get emulatedPosition() { return this[PRIVATE].emulatedPosition; }

  /**
   * @param {XRRigidTransform} transform 
   */
  _setTransform(transform) { this[PRIVATE].transform = transform; }
}
