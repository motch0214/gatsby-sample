import { withFirebase } from "./firebase"

export const viewIndex = async (): Promise<void> => {
  withFirebase((firebase) => firebase.analytics().logEvent("view_index", {}))
}
