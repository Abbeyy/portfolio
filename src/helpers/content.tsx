import { Description } from "../components/content/description/description";
import { MENU_CONTENT } from "../components/content/content";
import { LinkedIn } from "../components/buttons/linked-in/linkedIn";
import { Links } from "../components/content/links/links";
import { Snippet } from "../components/content/snippet/snippet";

export const determineContent = (content: MENU_CONTENT) => {
  switch (content) {
    case MENU_CONTENT.SKILLS:
      return (
        <>
          <p>Under construction!</p>
        </>
      );
    case MENU_CONTENT.EXPERIENCE:
      return (
        <>
          <p>Under construction!</p>
        </>
      );
    case MENU_CONTENT.SNIPPETS:
      return (
        <>
          <p>Under construction!</p>
        </>
      );
    case MENU_CONTENT.PROFILE:
    default:
      return (
        <>
          <Snippet />
          <Description />
          <Links />
          <LinkedIn />
        </>
      );
  }
};

export const getTypeFromString = (type: string) => {
  switch (type) {
    case "skills":
      return MENU_CONTENT.SKILLS;
    case "experience":
      return MENU_CONTENT.EXPERIENCE;
    case "snippets":
      return MENU_CONTENT.SNIPPETS;
    case "profile":
    default:
      return MENU_CONTENT.PROFILE;
  }
};
