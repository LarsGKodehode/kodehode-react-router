function CondRendParent() {
  return (
    <>
      <ConditonalRendering hidden={true} />
      {/* This is a shorthand for boolean props */}
      <ConditonalRendering hidden />
    </>
  )
}

function ConditonalRendering(props) {
  const {
    hidden = false,
    otherCondition
  } = props

  let element;
  if(somthing) {
    element = (<h2>Hi</h2>)
  }

  if(AlternitiveReturn) {
    return (
      <h1>Diffferent JSX</h1>
    )
  }

  return (
    <div>
      {
        // Logical AND
        hidden && 
        <h1>Conditionally rendered</h1>
      }

      {
        // Ternary operator
        otherCondition
        ? <h1>Conditionally rendered</h1>
        : <h2>If condition is false</h2>
      }

      {
        // JS variable storing a component
        element
      }

      {
        // Its possible to chain ternay operations
        // Though it gets messy fast
        !data
        ? <LoadingSpinner />
        : !data.error
        ? <h1>{data}</h1>
        : <h3>Error</h3>
      }
    </div>
  )
}
