import React from 'react'

const page = async (props) => {

    const {id} = props.params;

    console.log(id)
  return (
    <div>
      Hello, this is the screenplay of project {id}
    </div>
  )
}

export default page
