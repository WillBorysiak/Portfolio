import { Workplace as WorkplaceModel } from "../../../models/workplace.model";

interface WorkplaceProps {
  workplace: WorkplaceModel;
}

const Workplace = (props: WorkplaceProps) => {
  const { workplace } = props;

  const { company, position, date, descriptions } = workplace;

  return (
    <div id="job" className="mt-5 flex flex-col border-b-4 px-8 pb-5 md:px-0">
      <div className="ml-5">
        <h2 className="text-2xl md:text-3xl">{company}</h2>
      </div>
      <div className="mt-3 ml-10 text-xl md:text-2xl">
        <h2 className="font-bold">{position}</h2>
        <h4 className="border-b-2 pb-3 italic">{date}</h4>

        <ul className="mt-5 list-disc">
          {descriptions.map((description: string, index: number) => {
            return (
              <li
                className="text-dynamic-theme mb-2 text-lg font-bold md:text-xl"
                key={index}
              >
                {description}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Workplace;
