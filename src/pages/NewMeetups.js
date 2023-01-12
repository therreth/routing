import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupsPage() {
  function addMeetupHandler(meetupData) {
    fetch(
      "https://react-meetup-site-381c9-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
  return (
    <section>
      <h1>Add new meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler}></NewMeetupForm>
    </section>
  );
}

export default NewMeetupsPage;
