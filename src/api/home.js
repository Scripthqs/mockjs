import {request} from "./request";

export function getHomeMock(){
  return request({
    url:'/api/getHomeMock'
  })
}

