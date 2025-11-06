import { Card, CardContent } from "@/components/ui/card";

const Stat = ({ icon, value, label }) => (
  <div className="group">
    <Card className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-blue-400/30">
      <CardContent className="p-6 text-center">
        <div className="h-8 w-8 text-blue-400 mx-auto mb-3 group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <div className="text-white font-bold text-2xl">{value}</div>
        <div className="text-gray-400 text-sm">{label}</div>
      </CardContent>
    </Card>
  </div>
);

export default Stat;
