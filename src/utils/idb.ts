const idb = () => {
  const name = 'goshun_gulluk_app_indexed_database'
  const version = 1
  let openDBReq = indexedDB.open(name, version)

  // if no db
  openDBReq.onupgradeneeded = _ => {
    //init
  }

  //if has db
  openDBReq.onsuccess = _ => {
    //get
    const db = openDBReq.result
    console.log(db)
  }
  
  // openDBReq.onerror
  
}

export default idb;