import { BookmarkIcon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";

const HomePage = () => {
  return (
    <div>
      <Button>
        <BookmarkIcon width="16" height="16" /> Save
      </Button>
    </div>
  );
};

export default HomePage;
