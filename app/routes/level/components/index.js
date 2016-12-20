import React, { Component } from 'react';

import LevelOneBody   from './levelOne'
import LevelTwoBody   from './levelTwo'
import LevelThreeBody from './levelThree'

export const levels = {
  1: (info) => (<LevelOneBody   {...info} />),
  2: (info) => (<LevelTwoBody   {...info} />),
  3: (info) => (<LevelThreeBody {...info} />)
}