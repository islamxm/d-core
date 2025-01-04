import { useState } from "react"

export type Status = 'loading' | 'success' | 'error' | 'default'

const useStatus = () => {
  const [status, setStatus] = useState<Status>('default')

  const updateStatus = (status: Status) => {
    switch(status) {
      case 'loading':
        setStatus('loading')
        break
        case 'error':
        setStatus('error')
        break
        case 'success':
        setStatus('success')
        break
        default:
        setStatus('default')
        break
    }
  }

  return {
    status,
    updateStatus
  }
}

export default useStatus