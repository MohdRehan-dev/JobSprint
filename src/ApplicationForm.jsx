export default function ApplicationForm() {
  return (
    <form>
      <label htmlFor="companyName">Company : </label>
      <input id="companyName" name="companyName" type="text" />
      <br />
      <label htmlFor="role">Role : </label>
      <input id="role" name="role" type="text" />
      <br />
      <label htmlFor="location">Location : </label>
      <input id="location" name="location" type="text" />
      <br />
      <label htmlFor="status">Status</label>
      <select id="status" name="status" defaultValue="Saved">
        <option value="Saved">Saved</option>
        <option value="Applied">Applied</option>
        <option value="Assessment">Assessment</option>
        <option value="Interview">Interview</option>
        <option value="Offer">Offer</option>
        <option value="Rejected">Rejected</option>
        <option value="Withdrawn">Withdrawn</option>
      </select>
      <br />
      <button type="submit">Add Application</button>
    </form>
  );
}
