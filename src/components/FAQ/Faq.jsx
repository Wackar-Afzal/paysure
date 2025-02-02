'use client'
import { icons } from "@/assets/icons"
import { faqs } from "@/assets/staticdata";
import { useState } from "react";
import { Collapse } from "@mui/material"; // Import MUI Collapse

const Faq = () => {
    const [openFAQs, setOpenFAQs] = useState({}); // Track open state for each FAQ
    const [searchTerm, setSearchTerm] = useState(''); 
  
    const filteredFaqs = faqs.filter(faq =>
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.some(ans => ans.option.toLowerCase().includes(searchTerm.toLowerCase()))
      );
  
    const toggleFAQ = (index) => {
      setOpenFAQs(prev => ({
        ...prev,
        [index]: !prev[index] // Toggle open state for the clicked FAQ
      }));
    };
  

    return (
      <div id="faqs" className='p-[4rem] flex flex-col items-center space-y-8 py-Ypad px-Xpad md:p-[2rem] md:space-y-6'>
        <div className='flex flex-col space-y-5 w-full justify-center items-center'>
          <h3>Frequently Asked Questions</h3>
          <h6 className='text-grey text-center w-[70%] md:w-full'>General Information.</h6>
        </div>

        {/* Search Bar */}
        <div className='flex items-center bg-lightGrey rounded-full px-4 space-x-2 w-[75%] sm:w-full'>
          {icons.search}
          <input
            type="text"
            placeholder="Search ..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className=''
            style={{ border: "none", background: "inherit" }}
          />
        </div>

        {/* FAQs List */}
        <div className="select-none flex flex-col space-y-3 w-full">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <div 
                key={index} 
                onClick={() => toggleFAQ(index)} 
                className="flex flex-col space-y-5 bg-lightGrey p-5 rounded-[20px] hover:cursor-pointer"
              >
                <div className='flex justify-between items-center'>
                  <p>{faq.question}</p>
                  <span>
                    {openFAQs[index] 
                      ? <div className='hover:cursor-pointer'>{icons.up}</div> 
                      : <div className='hover:cursor-pointer'>{icons.down}</div>
                    }
                  </span>
                </div>

                {/* Smooth Transition with MUI Collapse */}
                <Collapse in={openFAQs[index]} timeout={300}>
                  <div className='flex flex-col '>
                    {faq.answer.map((item, idx) => (
                      <h6 key={idx} className='text-grey'>{item.option}</h6>
                    ))}
                  </div>
                </Collapse>
              </div>
            ))
          ) : (
            <p>No FAQs found for "{searchTerm}".</p>
          )}
        </div>
      </div>
    );
}

export default Faq;
