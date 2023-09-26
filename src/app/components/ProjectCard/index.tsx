import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import RobotPic from '../../../../public/vercel.svg'
interface CardProps {
    projectName: string;
    sourceLink: string;
    imageUrl: any;
    description: string;
    usedLibs: string[];
  }

  const ProjectCard: React.FC<CardProps> = ({ projectName, sourceLink, usedLibs, imageUrl, description}) => {

    return (
        <Card className="max-w-[400px]">
            <CardHeader className="flex justify-between gap-3">
            <div className="flex flex-col justify-center">
                    <p className="text-md">{projectName}</p>
                    <p className="text-small text-default-500">
                        {usedLibs.join(', ')}
                    </p>
                </div>
                <Image
                    alt="nextui logo"
                    height={40}
                    radius="sm"
                    src={imageUrl}
                    width={40}
                    />
            </CardHeader>
            <Divider/>
            <CardBody>
                <p>{description}</p>
            </CardBody>
            <CardFooter>
                <Link href={sourceLink}>Source on GitHub</Link>
            </CardFooter>
        </Card>
    )
}


export default ProjectCard;