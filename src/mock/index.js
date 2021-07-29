import Mock from 'mockjs'
import {getHomeMock} from './homeMock.js'
Mock.mock(/\/api\/getHomeMock/,'get',getHomeMock)