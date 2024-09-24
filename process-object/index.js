const initialMemory = process.memoryUsage().heapUsed
const [,,fname,lname] = process.argv
const yourName = `${fname} ${lname}`
const environment = process.env.NODE_ENV

for(let i=0;i<=1;i++){}

const currentMemoryUsage = process.memoryUsage().heapUsed

const usedHeap = currentMemoryUsage - initialMemory

console.log(`Hai, ${yourName}`)
console.log(`Mode environment: ${environment}`)
console.log(`Penggunaan memori dari ${initialMemory} naik ke ${currentMemoryUsage}`)
console.log(`Memori terpakai ${usedHeap}`)