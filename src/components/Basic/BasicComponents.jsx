function Basic() {
  return (
    <div>     
    </div>
  )
}

const ArrowNotation = () => {
  return (
    <div>     
    </div>
  )
}



class ClassComponent extends React.Component {

  // State is handled differently in Class components
  // const [state, useState] = useState(0);

  state = 0

  updateState() {
    this.state + 1
  }

  // These are sort of comparable to useEffect
  componentDidMount()
  componentDidUpdate()
  componentWillUnmount()

  render() {
    return (
      <div></div>
    )
  }
}