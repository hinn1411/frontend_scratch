import CardContainer from "./CardContainer";
import CardContent from "./CardContent";
import CardHeader from "./CardHeader";
import CardTitle from "./CardTitle";

interface TargetCardProps {}
const TargetCard = ({}: TargetCardProps) => {
  return (
    <CardContainer className="mb-4 p-6 dark:bg-gray-900">
      <CardHeader>
        <CardTitle>What you will gain</CardTitle>
      </CardHeader>
      <CardContent>
        <ul>
          {[
            "Learn how to build a image slider from scratch",
            "Handle unepected behaviors",
            "Learn new CSS features",
          ].map((target, index) => (
            <li
              key={index}
              className="relative my-3 list-none pl-7 text-sm before:absolute before:left-1 before:top-[9px] before:h-1.5 before:w-1.5 before:rounded-full hover:before:bg-accent-foreground/90 font-bold before:bg-primary-500/30 hover:before:ring-[3px] hover:before:ring-primary-500 hover:before:ring-offset-1 hover:before:ring-offset-black/10 dark:hover:before:ring-primary-500"
            >
              <span className="transition-colors duration-200 ease-in-out hover:text-primary-500 dark:hover:text-primary-500">
                {target}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </CardContainer>
  );
};

export default TargetCard;
