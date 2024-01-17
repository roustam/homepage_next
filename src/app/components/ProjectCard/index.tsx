'use client'
import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
interface CardProps {
    projectName: string;
    sourceLink: string;
    imageUrl: any;
    description: string;
    usedLibs: string[];
    demoLink?: string;
  }

  const ProjectCard: React.FC<CardProps> = ({ projectName, sourceLink,demoLink, usedLibs, imageUrl, description}) => {

    return (
        <Card className="xl:max-w-[400px] md:w-full">
            <CardHeader className="flex justify-between h-20">
            <div className="flex flex-col justify-center">
                    <p className="text-md">{projectName}</p>
                    <p className="text-small text-default-500">
                        {usedLibs.join(', ')}
                    </p>
                </div>
                <div>
                <Image
                    radius="none"
                    alt="job logo icon"
                    src={imageUrl}
                    className="min-w-full"
                    width={'40px'}
                    />
                </div>
            </CardHeader>
            <Divider/>
            <CardBody>
                <p>{description}</p>
            </CardBody>
            <CardFooter className="flex justify-between">
                <Link href={sourceLink}>Source on GitHub</Link>
                {demoLink && (
                    <Link href={demoLink}>Demo</Link>
                )}
                
            </CardFooter>
        </Card>
    )
}


export default ProjectCard;