function Parent() {
  function handleClick() {
    // Do stuff here
  }

  return (
    <>
      <BasicProps title="My Title" onClick={handleClick}/>

      <ChildrenProps>
        <h3>Title</h3>
        <button onClick={handleClick}>Ohh!!</button>
      </ChildrenProps>

      <Destructuring prop1="1" prop2={3} />
    </>
  )
}


function BasicProps(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <button onClick={props.onClick}>Click Me</button>
    </div>
  )
}

function ChildrenProps(props) {
  return (
    <div>
      {props.children}
    </div>
  )
}

function Destructuring(props) {
  const {prop1, prop2} = props

  return (
    <div>
      <h2>{prop1}</h2>
      <h3>{prop2}</h3>
    </div>
  )
}

function InnlineDestructuring({
  prop1,
  prop2
}) {

  return <div></div>
}