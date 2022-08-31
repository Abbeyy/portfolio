import { LinkedIn } from "../buttons/linked-in/linkedIn";
import { Description } from "./description/description";
import { Links } from "./links/links";
import { Snippet } from "./snippet/snippet";

export const Profile = () => (
  <>
    <Snippet />
    <Description />
    <Links />
    <LinkedIn />
  </>
);
