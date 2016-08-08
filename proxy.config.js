// Learn more on how to config.
// - https://github.com/dora-js/dora-plugin-proxy#规则定义

module.exports = {
  // 'http://127.0.0.1/hbms/*': 'http://192.168.1.11/',
  '/hbms/*': 'http://192.168.1.11/',
  // '/hbms/*': 'http://test.ihomefnt.com:8099/',
  // '/api/todos': function(req, res) {
  //   setTimeout(function() {
  //     res.json({
  //       success: true,
  //       data: [
  //         {
  //           id: 1,
  //           text: 'Learn antd',
  //           isComplete: true,
  //         },
  //         {
  //           id: 2,
  //           text: 'Learn ant-tool',
  //         },
  //         {
  //           id: 3,
  //           text: 'Learn dora',
  //         },
  //       ],
  //     });
  //   }, 500);
  // },
};
