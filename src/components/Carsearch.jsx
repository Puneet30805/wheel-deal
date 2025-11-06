import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Check, ChevronsUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import cars from "../data/cars.json";

export default function CarCombobox() {
  const [open, setOpen] = useState(false);
  const [selectedCarId, setSelectedCarId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const selectedCar = cars.find((car) => car.id === selectedCarId);

  const handleSelect = (id) => {
    setSelectedCarId(id);
    setOpen(false);
    navigate(`/cars/${id}`);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          role="combobox"
          aria-expanded={open}
          className="w-[250px] justify-between border border-white/60  bg-transparent text-white hover:bg-white/10"
        >
          {selectedCar
            ? `${selectedCar.make} ${selectedCar.model} (${selectedCar.year})`
            : "Select a car..."}
          <ChevronsUpDown className="opacity-70 text-white ml-2" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-[250px] p-0 bg-white text-black rounded-xl shadow-lg">
        <Command>
          <CommandInput
            placeholder="Search cars..."
            className="h-9"
            onValueChange={setSearchTerm}
          />
          <CommandList>
            <CommandEmpty>No cars found.</CommandEmpty>
            <CommandGroup>
              {cars
                .filter((car) =>
                  `${car.make} ${car.model} ${car.year}`
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
                )
                .map((car) => (
                  <CommandItem
                    key={car.id}
                    value={car.id.toString()}
                    onSelect={() => handleSelect(car.id)}
                  >
                    {car.make} {car.model} ({car.year})
                    <Check
                      className={
                        selectedCarId === car.id
                          ? "ml-auto text-blue-600 opacity-100"
                          : "ml-auto opacity-0"
                      }
                    />
                  </CommandItem>
                ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
