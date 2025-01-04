const copyTextToClipboard = async (
  text: string, 
  cb: (result: 'success' | 'failed') => any
) => {
  navigator.clipboard.writeText(text).then(_ => {
    cb('success')
  }).finally(() => {
    cb('failed')
  })
}

export default copyTextToClipboard;

