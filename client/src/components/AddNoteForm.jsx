const AddNoteForm = () => {
  return (
    <div>
      <form>
  <div className="mb-3">
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Title'/>
  </div>
  <div className="mb-3">
    <textarea type="text" className="form-control" placeholder='Take a note...'/>
  </div>
</form>
    </div>
  )
}

export default AddNoteForm
