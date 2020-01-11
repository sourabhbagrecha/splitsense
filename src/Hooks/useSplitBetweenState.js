import {useState} from 'react';
export default function useSplitBetweenState(defaultVal) {
  const [splitBetween, setSplitBetween] = useState(defaultVal);
  return {
    splitBetween,
    toggleSplitEnabled : (personId) => {
      const newSplitBetween = splitBetween.map(p => {
        return p.id === personId ? {...p, enabled: !p.enabled} : p;
      })
      setSplitBetween(newSplitBetween);
    },
    splitEqually : (totalAmount) => {
      const participants = splitBetween.filter(({enabled}) => enabled === true);
      const amountPerParticipant = totalAmount/participants.length;
      const newSplitBetween = splitBetween.map(p => {
        return p.enabled === true ? {...p, amount: amountPerParticipant} : {...p, amount: 0, share: 0, percentage: 0};
      })
      setSplitBetween(newSplitBetween);      
    },
    splitUnequally : (totalAmount, personId, amount) => {
      const newSplitBetween = splitBetween.map(p => {
        return p.enabled === true ? (p.id === personId ? {...p, amount: amount} : p) : {...p, amount: 0, share: 0, percentage: 0}
      })
      setSplitBetween(newSplitBetween);
    },
    splitByPercentage : (totalAmount, personId, percentage) => {
      const newSplitBetween = splitBetween.map(p => {
        return p.enabled === true ? (p.id === personId ? {...p, percentage} : p) : {...p, amount: 0, share: 0, percentage: 0}
      })
      setSplitBetween(newSplitBetween);      
    },
    splitByShare : (totalAmount, personId, share) => {
      const newSplitBetween = splitBetween.map(p => {
        return p.enabled === true ? (p.id === personId ? {...p, share} : p) : {...p, amount: 0, share: 0, percentage: 0}
      })
      setSplitBetween(newSplitBetween);
    },
    resetValues : ( ) => {
      const newSplitBetween = splitBetween.map(p => {
        return {...p, amount: 0, share: 0, percentage: 0}
      })
      setSplitBetween(newSplitBetween)
    },
    calculateShare : (totalAmount) => {
      const totalShareCount = splitBetween.reduce((sum, value) => sum + parseInt(value.share), 0 );
      const amountPerShare = totalShareCount === 0 ? 0 : totalAmount/totalShareCount;
      const newSplitBetween = splitBetween.map(p => {
        return p.enabled === true ? {...p, amount: amountPerShare*p.share} : {...p, amount: 0, share: 0, percentage: 0}
      })
      setSplitBetween(newSplitBetween);
    },
    calculatePercentage : (totalAmount) => {
      const newSplitBetween = splitBetween.map(p => {
        return p.enabled === true ? {...p, amount: totalAmount*(0.01*p.percentage)} : {...p, amount: 0, share: 0, percentage: 0}
      })
      setSplitBetween(newSplitBetween);  
    }
  }
}