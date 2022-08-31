import { Skills } from "../components/skills/skills";
import { MENU_CONTENT } from "../components/content/content";
import { Profile } from "../components/profile/profile";

export const determineContent = (content: MENU_CONTENT) => {
  switch (content) {
    case MENU_CONTENT.SKILLS:
      return <Skills />;
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
      return <Profile />;
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
