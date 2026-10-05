import Card from "../utility/Card";
import Button from "../utility/Button";

function ServiceCard({
  icon,
  title,
  description,
}) {
  return (
    <Card>
      <div className="p-8 flex flex-col h-full min-h-[320px]">
        
        <div className="w-16 h-16 rounded-2xl bg-[#F7B9C4] flex items-center justify-center">
          {icon}
        </div>

        <h3 className="mt-6 text-3xl font-bold text-[#4A3267]">
          {title}
        </h3>

        <p className="mt-4 text-gray-600 leading-7 flex-grow">
          {description}
        </p>

        <Button
          text="Book Service"
          className="w-full mt-8 bg-[#4A3267] text-white hover:bg-[#DE638A]"
        />
      </div>
    </Card>
  );
}

export default ServiceCard;