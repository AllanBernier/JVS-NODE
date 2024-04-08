async function intensiveCpuTaskIo () {
    console.log('Launching intensive CPU task')
    let increment = 0
    while (increment !== Math.pow(10, 10)) {
      increment++
    }
    console.log('Intensive CPU task is done ! Result is : ', increment)
  }

async function main () {
    setInterval(() => { console.log('Event loop on main thread is not blocked') }, 1000)
    await intensiveCpuTaskIo()
}

main()