export function CreateEventUI({ email, onSubmit }) {
  return (
    <form className="createEventForm" onSubmit={(e) => onSubmit(e)} key="CreateEvent" >
      <h3>Manager</h3>
      <div>
        <label htmlFor="host-email">Host Email</label>
        <input
          type="email"
          placeholder="host-email"
          value={email}
          name="hostEmail"
          disabled
          required
        />
      </div>
      <h3>Event</h3>
      <input type="text" placeholder="Enter Topic" name="topic" required />
      <br />
      <input type="text" placeholder="Enter Product Name" name="product" required />
      
      <br />
      <input type="submit" value="Book Venue" />
    </form>
  );
}

