import CONSTANTS from "../constants"
import { useEffect, useReducer, useState } from "react"

//object wich keys is a value of CONSTANTS.DB.STORE_OBJECTS
type StoreObjectNames = keyof typeof CONSTANTS.DB.STORE_OBJECTS
type Transactions = Record<StoreObjectNames, IDBTransaction | undefined>
type TransactionType = 'readwrite' | 'readonly'


const dbAction = {
  deleteDatabase: () => indexedDB.deleteDatabase(CONSTANTS.DB.NAME),
  openDatabase: () => indexedDB.open(CONSTANTS.DB.NAME, CONSTANTS.DB.VERSION)
}

const useIdb = () => {
  const [db, setDb] = useState<IDBDatabase>()
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [transactions, setTransactions] = useState<Transactions>({
    oficers: undefined,
    soldiers: undefined,
    days: undefined,
    fractions: undefined
  })

  const onDBSuccess = (e: Event) => {
    console.log('success')
    setIsLoading(false)
    setIsSuccess(true)    
    if(e?.target && 'result' in e?.target) {
      let res = e.target.result
      if(res instanceof IDBDatabase) {
        setDb(res)
      }
    }
  }

  const onDBError = (e: Event) => {
    setIsLoading(false)
    console.log('error')
  }

  const onDBUpgradeNeeded = (e: Event) => {
    setIsLoading(false)
    if(e?.target && 'result' in e?.target) {
      let res = e.target.result
      if(res instanceof IDBDatabase) {
        if(!res.objectStoreNames.contains(CONSTANTS.DB.STORE_OBJECTS.oficers)) {
          res.createObjectStore(CONSTANTS.DB.STORE_OBJECTS.oficers, {autoIncrement: true})
          console.log('store object created')
        }
      }
    }
  }

  const getAllObjectStores = () => {}

  const getObjectStore = (name: StoreObjectNames, type: TransactionType) => {
    let storeObject: ReturnType<IDBTransaction['objectStore']> | undefined
    if(db) {
      let transc = db.transaction(CONSTANTS.DB.STORE_OBJECTS[name], type)
      storeObject = transc.objectStore(CONSTANTS.DB.STORE_OBJECTS[name])
    }    
    return storeObject
  }

  useEffect(() => {
    if('indexedDB' in window) {
      let dbReq = dbAction.openDatabase()
      dbReq.onsuccess = onDBSuccess
      dbReq.onerror = onDBError
      dbReq.onupgradeneeded = onDBUpgradeNeeded
      
    } else console.log('INDEXED DB NOT SUPPORTED IN THIS BROWSER')
  }, [])


  return {
    getObjectStore,
    db,
    dbState: {
      isLoading,
      isError,
      isSuccess
    }
  }
}

export default useIdb