import { Description } from "../components/main/description";
import { MENU_CONTENT } from "../components/content/content";
import { HireMe } from "../components/main/hireMe";
import { Links } from "../components/main/links";
import { Snippet } from "../components/main/snippet";

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
          <HireMe />
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
