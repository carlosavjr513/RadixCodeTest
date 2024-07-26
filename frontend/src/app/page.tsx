import EquipmentForm from "./components/EquipmentForm";
import FilterComponent from "./components/FilterComponent";
import UploadForm from "./components/UploadForm";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen py-2">
      <main className="flex flex-col items-center justify-center px-20 text-center">
        <div className="p-2">
          <EquipmentForm />
        </div>
        <div className="p-2">
          <UploadForm />
        </div>
        <div className="p-2 flex space-x-5">
          <FilterComponent />
        </div>
      </main>
    </div>
  );
};

export default Home;
