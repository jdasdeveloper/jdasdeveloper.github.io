        var lookup = {
            "AllergyImmunology": ["Adult Cardiothoracic Anesthesiology"],
            "Anesthesiology": ["Adult Cardiothoracic Anesthesiology", "Critical Care Medicine", "Obstetric Anesthesiology", "Pain Medicine", "Pediatric Anesthesiology"],
            "ColonRectalSurgery": ["Colon & Rectal Surgery"],
            "Dermatology": ["Dermatopathology", "Procedural Dermatology"],
            "EmergencyMedicine": ["Medical Toxicology", "Pediatric Emergency Medicine", "Sports Medicine"],
            "FamilyMedicine": ["Geriatric Medicine", "Sports Medicine"],
            "FamilyPractice": ["Geriatric Medicine"],
            "InternalMedicine": ["Advanced Heart Failure & Transplant Cardiology", "Cardiovascular Disease", "Clinical Cardiac Electrophysiology", "Critical Care Medicine", "Endocrinology, Diabetes & Metabolism", "Gastroenterology", "Geriatric Medicine", "Hematology", "Hematology & Oncology", "Infectious Disease", "Interventional Cardiology", "Nephrology", "Oncology", "Pulmonary Disease", "Pulmonary Disease & Critical Care Medicine", "Rheumatology", "Sports Medicine", "Transplant Hepatology"],
            "InternalMedicinePediatrics": ["Internal Medicine-Pediatrics"],
            "MedicalGenetics": ["Biochemical Genetics", "Molecular Genetic Pathology"],
            "NeurologicalSurgery": ["Endovascular Surgical Neuroradiology"],
            "Neurology": ["Child Neurology", "Clinical Neurophysiology", "Endovascular Surgical Neuroradiology", "Neuromuscular Medicine", "Pain Medicine"],
            "NuclearMedicine": ["Endovascular Surgical Neuroradiology"],
            "ObstetricsGynecology": ["Female Pelvic Medicine & Reconstructive Surgery"],
            "Ophthalmology": ["Ophthalmic Plastic & Reconstructive Surgery"],
            "OrthopaedicSurgery": ["Adult Reconstructive Orthopaedics", "Foot & Ankle Orthopaedicsy", "Hand Surgery", "Musculoskeletal Oncology", "Orthopaedic Sports Medicine", "Orthopaedic Surgery of the Spine", "Orthopaedic Trauma", "Pediatric Orthopaedics"],
            "Otolaryngology": ["Otology - Neurotology", "Pediatric Otolaryngology"],
            "PathologyAnatomicClinical": ["Blood Banking - Transfusion Medicine", "Chemical Pathology", "Cytopathology", "Forensic Pathology", "Hematology", "Medical Microbiology", "Neuropathology", "Pediatric Pathology"],
            "Pediatrics": ["Adolescent Medicine", "Child Abuse Pediatrics", "Developmental-Behavioral Pediatrics", "Neonatal-Perinatal Medicine", "Pediatric Cardiology", "Pediatric Critical Care Medicine", "Pediatric Emergency Medicine", "Pediatric Endocrinology", "Pediatric Gastroenterology", "Pediatric Hematology-Oncology", "Pediatric Infectious Diseases", "Pediatric Nephrology", "Pediatric Pulmonology", "Pediatric Rheumatology", "Pediatric Sports Medicine", "Pediatric Transplant Hepatology"],
            "PhysicalMedicineRehabilitation": ["Neuromuscular Medicine", "Pain Medicine", "Spinal Cord Injury Medicine", "Sports Medicine"],
            "PlasticSurgery": ["Craniofacial Surgery", "Hand Surgery"],
            "PreventiveMedicine": ["Medical Toxicology"],
            "Psychiatry": ["Addiction Psychiatry", "Child & Adolescent Psychiatry", "Forensic Psychiatry", "Geriatric Psychiatry", "Radiation Oncology"],
            "RadiologyDiagnostic": ["Abdominal Radiology", "Cardiothoracic Radiology", "Endovascular Surgical Neuroradiology", "Muscoskeletal Radiology", "Neuroradiology", "Nuclear Radiology", "Pediatric Radiology", "Vascular & Interventional Radiology"],
            "SleepMedicine": ["Sleep Medicine"],
            "SurgeryGeneral": ["Hand Surgery", "Pediatric Surgery", "Surgical Critical Care", "Vascular Surgery"],
            "ThoracicSurgery": ["Congenital Cardiac Surgery", "Thoracic Surgery-Integrated"],
            "Urology": ["Pediatric Urology"],
        };
        // When an option is changed, search the above for matching choices
    $('#options').on('change', function () {
        // Set selected option as variable
        var selectValue = $(this).val();
        // Empty the target field
        $('#choices').empty();
        // For each chocie in the selected option
        for (i = 0; i < lookup[selectValue].length; i++)
        {
            // Output choice in the target field
            $('#choices').append("<option value='" + lookup[selectValue][i] + "'>" + lookup[selectValue][i] + "</option>");
        }
        if($('#options').value != "")
        {
            $('#choices').fadeIn();
            /*#choices is now a required field (pending)*/ 
        } 
    });
    