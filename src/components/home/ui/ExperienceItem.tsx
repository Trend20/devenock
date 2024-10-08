import type { IExperienceItem } from "../../../types";
import CardBox from "../../core/CardBox";
import Column from "../../core/Column";
import { FaRegCheckSquare } from "react-icons/fa";

const ExperienceItem = ({ data }: { data: IExperienceItem }) => {
  return (
    <CardBox classNames="p-4 items-start bg-[var(--textColor10)] group w-full">
      <Column classNames="justify-between w-full h-full gap-12">
        <Column classNames="justify-start">
          <p className="lg:text-4xl font-bold mt-4 text-2xl">
            {data.designation}
          </p>
          <p className="text-[var(--textColorLight)] text-sm font-medium py-2 uppercase">
            {data.company}
          </p>
          <p className="text-[var(--textColorLight)] text-base/6 font-medium uppercase">
            {data.startDate} - {data.endDate}
          </p>
        </Column>
        <Column classNames="space-y-3 w-full">
          {data.achievements.map((achievement, index) => (
            <div className="flex items-start">
              <FaRegCheckSquare size={20} className="mr-3" />
              <p className="text-sm leading-6" key={index}>
                {achievement.desc}
              </p>
            </div>
          ))}
        </Column>
      </Column>
    </CardBox>
  );
};

export default ExperienceItem;
