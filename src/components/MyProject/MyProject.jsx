import useFetch from "../../hooks/useFetch"


function MyProject({
  className,
  user
}) {

  // 
  const {isLoading, data, error} = useFetch(`https://api.github.com/users/${user}`)

  console.log(data)


  return (
    <div className={className}>
      <h1>My Project</h1>
      {
        data &&
        <img src={data.avatar_url} alt="profile picture" />
      }
    </div>
  )
}

export default MyProject