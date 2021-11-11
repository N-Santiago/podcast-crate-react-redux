import About from "./About";
import Home from './Home';
import Podcasts from './Podcasts';
import PodcastInput from "./PodcastInput";
import PodcastEdit from "./PodcastEdit";
import withAuth from "./WithAuth";

const authComponents = {About, Home, Podcasts}
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