import Mock from 'mockjs'

export default {
  ['GET /api/count'](req, res) {
    let data = Mock.mock({
        "string|1-10": "★"
    })
    res.status(200).json(data.string)
  }
}
