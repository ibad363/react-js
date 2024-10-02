

const [value, setValue] = useState(0)
  const count = useRef(0)
  
  useEffect(()=>{
   count.current = count.current + 1 
  })

  return (
    <>
      <button onClick={()=> setValue(prev => prev - 1)}>-1</button>
      <h1>{value}</h1>
      <button onClick={()=> setValue(prev => prev + 1)}>+1</button>
      <h1>Render Count: {count.current}</h1>
    </>
  )