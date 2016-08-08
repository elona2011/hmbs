import {ajax} from '~/services/ajax.js'

function relateImage(options) {
  ajax({
    url: 'datum/relateDatum',
    type: 'POST',
    data: {
      "kind": options.kind,
      "relationId": options.relationId,
      "type": options.type,
      "url": options.url
    }
  }).then(function() {
    alert('保存成功')
  })
}

export default relateImage
