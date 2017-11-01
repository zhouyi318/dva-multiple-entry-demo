import Mock from 'mockjs'

export default {
    ['GET /api/list'](req, res) {
        let data = Mock.mock({
            "array": [
                {
                    id: 1,
                    renderHeader: "标题1",
                    container:Mock.mock('@county(true)')

                }, {
                    id: 2,
                    renderHeader: "标题2",
                    container:Mock.mock('@county(true)')
                }, {
                    id: 3,
                    renderHeader: "标题3",
                    container:Mock.mock('@county(true)')
                }, {
                    id: 4,
                    renderHeader: "标题4",
                    container:Mock.mock('@county(true)')
                }, {
                    id: 5,
                    renderHeader: "标题5",
                    container:Mock.mock('@county(true)')
                }, {
                    id: 6,
                    renderHeader: "标题6",
                    container:Mock.mock('@county(true)')
                }
            ]
        })
        res.status(200).json(data.array)
    }
}