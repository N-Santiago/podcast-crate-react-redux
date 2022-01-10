import About from "./About";
import Podcasts from './Podcasts';
import PodcastInput from "./PodcastInput";
import PodcastEdit from "./PodcastEdit";
import Logout from "./Logout";
import Episodes from "./Episodes"
import withAuth from "./WithAuth";

const authComponents = {About, Podcasts, Logout, Episodes}
const protComponents = {PodcastEdit, PodcastInput}

const authenticatedComponents = {}
const protectedComponents = {}

for (const [key, value] of Object.entries(authComponents)) {
    authenticatedComponents[`Authenticated${key}`] = withAuth(value)
}

for (const [key, value] of Object.entries(protComponents)) {
    protectedComponents[`Protected${key}`] = withAuth(value)
}

export const wrappedComponents = {...authenticatedComponents, ...protectedComponents}