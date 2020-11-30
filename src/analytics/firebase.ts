import { getFirebase, Firebase } from "components/FirebaseContext"

export const withFirebase = async (
  callback: (firebase: Firebase) => void
): Promise<void> => {
  const firebase = await getFirebase()
  if (firebase) {
    callback(firebase)
  }
}
