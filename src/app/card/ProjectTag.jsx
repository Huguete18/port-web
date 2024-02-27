import React from "react";
import { Button } from "@nextui-org/react";

const ProjectTag = ({ name, onClick }) => {
  return (
    <Button color="primary" variant="ghost" onClick={() => onClick(name)}>
      {name}
    </Button>
  );
};

export default ProjectTag;
