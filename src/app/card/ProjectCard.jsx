import React from "react";
import Link from "next/link";
import { Button, ButtonGroup } from "@nextui-org/react";
import { Image, Card, CardFooter } from "@nextui-org/react";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="mt-3 rounded-t-xl relative group">
      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-7"
      >
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover"
          src={imgUrl}
          style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
        />
        <CardFooter className="absolute bg-slate-200 dark:bg-[#151920] bg-opacity-95 dark:bg-opacity-95 bottom-0 border-t-1 border-slate-100 dark:border-slate-800">
          <div className="flex flex-grow gap-2 items-center">
            <div className="flex flex-col">
              <p className="text-tiny text-slate-800 dark:text-slate-400">
                {title}
              </p>
              <p className="text-tiny text-slate-800 dark:text-slate-400">
                {description}
              </p>
            </div>
          </div>
          <ButtonGroup>
            <Button color="primary" variant="ghost">
              <Link href={gitUrl} target="_blank">
                Visit Code
              </Link>
            </Button>
            <Button color="primary" variant="ghost">
              <Link href={previewUrl} target="_blank">
                Visit Page
              </Link>
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProjectCard;
