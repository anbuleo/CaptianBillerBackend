// import escpos from 'escpos';
// // import usb  from 'usb';
// import es from 'node-printer'
// import printer from 'node-printer';
// import { createRequire } from "module";




// escpos.USB = usb
// escpos.USB.debug = true;
const VID = 0x154F;
const PID = 0x154F;


const print = async(req,res,next)=>{
    try {   // const device = usb.getDeviceList()
        // console.log(device)
//         const printers = printer.getPrinters();
// console.log(printers);
//         const devices =await escpos.USB.getDevice(0x154F,  0x154F);
// console.log(devices);
        // const device = new escpos.USB( 0x154F,  0x154F); // Replace with your printer's vendor and product IDs
        // const printer = new escpos.Printer(device);
    //     // const printer = new escpos.USB(0x5455, 0x5455);
    // const device = new escpos.USB.getDevice(VID,PID)
    // console.log(device) 
//     const printer = new es.Printer(new es.USB(0x154F, 0x154F));

// printer.text("Hello TVS Printer")
//     .cut()
//     .close();

      
    //     printer.open(()=>{
    //         printer.font("a").align("ct")
    //         .style("b")
    //         .size(1, 1)
    //         .text("GROCERY STORE")
    //         .text("======================")
    //         .align("lt")
    //         .text("Item     Qty   Price")
    //         .text("----------------------");

    //         printer
    //   .text("----------------------")
    //   .align("rt")
    //   .text(`TOTAL: ₹${total}`)
    //   .align("ct")
    //   .text("Thank you for shopping!")
    //   .text("======================")
    //   .cut()
    //   .close();

    // res.status(201).json({ message: "Print successful" });
    //     })

   
       
    } catch (error) {
        console.log(error)
        next(error)
    }
}

export default {
    print
}