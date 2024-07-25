import EquipmentForm from "./components/EquipmentForm";
import FilterComponent from "./components/FilterComponent";
import UploadForm from "./components/UploadForm";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen py-2">
      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-xl font-bold">Equipment Data </h1>
        <p className="mt-3 text-2xl">Fill in the details and submit the form</p>
        <div className="mt-6">
          <EquipmentForm />
        </div>
        <div className="mt-6">
          <UploadForm />
        </div>
        <div className="mt-6">
          <FilterComponent />
        </div>
      </main>
    </div>
  );
};

export default Home;
