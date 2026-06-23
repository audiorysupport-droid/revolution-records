import { getFirestore, doc, getDoc } from "firebase/firestore";

async function loadArtistPage() {
  const path = window.location.pathname.replace('/', ''); // Gets 'drake' from '/drake'
  if (!path) return; // Stay on home if path is empty

  const db = getFirestore();
  const docRef = doc(db, "artists", path);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const data = docSnap.data();
    // Update your UI here
    document.getElementById('bio').innerText = data.bio;
    // Render only first 3 releases: data.releases.slice(0, 3)
  } else {
    // Redirect to 404 or show "Artist not found"
  }
}

loadArtistPage();
