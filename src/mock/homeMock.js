//引入mockjs
import Mock from 'mockjs'
// 获取 mock.Random 对象
const Random = Mock.Random;
//使用mockjs模拟数据

export const getHomeMock = () => {
  let list = [];
  for(let i = 0; i < 30; i++) {//生成随机30条数据
      let listData = {
          title: Random.csentence(5, 10),//随机生成一段中文文本。
          time: Random.datetime('yyyy-MM-dd HH:mm:ss'),//生产随机时间
          status: Random.integer(100, 9999),//返回一个随机的整数。
          img: Random.image('114x83', '#00405d', '#FFF', 'Mock.js')
      }
      list.push(listData);
  }
  return {
      data: list,
      status: 200,
      message: "查询成功"
  }
}

